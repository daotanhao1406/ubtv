import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <PricingInformation
        buttonList={{
          [PLAN_ID.FREE]: <Link href="/sign-up">{t('button_text')}</Link>,
          [PLAN_ID.PREMIUM]: <Link href="/sign-up">{t('button_text')}</Link>,
          [PLAN_ID.ENTERPRISE]: <Link href="/sign-up">{t('button_text')}</Link>,
        }}
      />
    </Section>
  );
};

export { Pricing };
