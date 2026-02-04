import NotFoundContent from '@/components/common/NotFoundContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - Page Not Found | Web Core EX",
  description: "The page you are looking for does not exist."
};

export default function Page() {
  return <NotFoundContent />;
}
