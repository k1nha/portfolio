import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  PageNotFound,
  ProjectPage,
} from '../pages';
import { LanguageProvider } from '@/contexts';

export function RootNavigator() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'about'} element={<AboutPage />} />
          <Route path={'/projects'} element={<ProjectPage />} />
          <Route path={'/contact'} element={<ContactPage />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
