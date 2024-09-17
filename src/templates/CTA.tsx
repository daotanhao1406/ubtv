import { useTranslations } from 'next-intl';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a href="https://github.com/daotanhao1406/ubtv">{t('button_text')}</a>
        }
      />
    </Section>
  );
};

export { CTA };
