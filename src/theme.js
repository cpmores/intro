// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 主色调
    },
    secondary: {
      main: '#dc004e', // 次要色调
    },
    background: {
      default: '#f4f6f8', // 全局背景色
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // 全局字体
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  spacing: 8, // 基础间距单位
});

export default theme;
