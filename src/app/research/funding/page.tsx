import { Metadata } from 'next';
import FundingPageClient from '@/components/FundingPageClient';

export const metadata: Metadata = {
  title: 'Research Funding & Grants',
  description: 'Explore research funding opportunities at IIC. Internal grants, external funding support, and industry partnership programmes.',
};

export default function FundingPage() {
  return <FundingPageClient />;
}