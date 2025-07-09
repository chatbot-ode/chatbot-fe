import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./global/layouts/MainLayout'));
const NotFoundPage = loadable(() => import('./global/pages/NotFoundPage'));
const ChatPage = loadable(() => import('./chat/pages/ChatPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ChatPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
