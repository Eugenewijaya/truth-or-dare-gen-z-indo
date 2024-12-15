import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StartButton } from './components/StartButton';
import { CategoryGrid } from './components/CategoryGrid';
import { CoinFlip } from './components/CoinFlip';
import { Card } from './components/Card';
import { SocialPromo } from './components/SocialPromo';
import { useAudio } from './hooks/useAudio';
import { usePromotion } from './hooks/usePromotion';
import { GameState, Category, ResultType } from './types/game';
import { truths, dares } from './data/questions';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [category, setCategory] = useState<Category | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentResult, setCurrentResult] = useState<ResultType>(null);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [showCard, setShowCard] = useState(false);
  
  // Using a royalty-free game music URL
  const { play: playMusic } = useAudio('https://assets.mixkit.co/music/preview/mixkit-game-show-fun-942.mp3', true);
  const { showPromo, setShowPromo } = usePromotion();

  const startGame = () => {
    playMusic();
    setGameState('category');
  };

  const selectCategory = (cat: Category) => {
    setCategory(cat);
    setGameState('game');
  };

  const flipCoin = () => {
    setIsFlipping(true);
    const result = Math.random() > 0.5 ? 'truth' : 'dare';
    setCurrentResult(result);
    
    const questions = result === 'truth' ? truths[category!] : dares[category!];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
  };

  const onFlipComplete = () => {
    setIsFlipping(false);
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {gameState === 'start' && <StartButton onClick={startGame} />}
        {gameState === 'category' && <CategoryGrid onSelect={selectCategory} />}
        {gameState === 'game' && (
          <div className="text-center">
            <button
              onClick={flipCoin}
              disabled={isFlipping}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-2xl font-bold shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Flip the Coin!
            </button>

            <div className="mt-8 flex justify-center">
              <CoinFlip
                isFlipping={isFlipping}
                result={currentResult}
                onAnimationComplete={onFlipComplete}
              />
            </div>

            {category && currentResult && (
              <Card
                question={currentQuestion}
                isOpen={showCard}
                onClose={() => setShowCard(false)}
                category={category}
                type={currentResult}
              />
            )}
          </div>
        )}
      </main>

      <SocialPromo isVisible={showPromo} onClose={() => setShowPromo(false)} />
      <Footer />
    </div>
  );
}

export default App;