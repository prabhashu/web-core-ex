import PrivacyContent from '@/components/privacy/PrivacyContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Web Core EX",
  description: "Our commitment to protecting your data. Read the Web Core EX privacy policy."
};

export default function Page() {
  return <PrivacyContent />;
}
