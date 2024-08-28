import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function But() {
  const [isVisible, setIsVisible] = useState(true);
  const [showContainer, setShowContainer] = useState(false);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => setShowContainer(true), 2000); // 2秒后显示容器，与按钮淡出动画同步
  };

  return (
    <art class="back2">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={handleClick}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // 淡出动画
            transition={{ duration: 2 }} // 动画持续时间为2秒
            class="exa"
          >
            Hello
          </motion.button>
        )}
      </AnimatePresence>

      {showContainer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // 容器出现时淡入
          transition={{ duration: 2 }} // 动画持续时间为2秒
          style={{
            width: '100vw',
            height: '100vh',
            color: 'white',
            display: 'flex',
            marginTop: '0',
            position:'fixed',
          }}
          class="container"
        >
          <p>You can type here</p>
        </motion.div>
      )}
      </art>
  );
}

export default But;