import { Outlet } from 'react-router';
import { AIAssistant } from './ai-assistant';

export function Layout() {
  return (
    <>
      <Outlet />
      <AIAssistant />
    </>
  );
}
