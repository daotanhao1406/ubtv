import { Tooltip } from '@nextui-org/tooltip';
import { useTranslations } from 'next-intl';

const ProtectFallback = (props: { trigger: React.ReactNode }) => {
  const t = useTranslations('ProtectFallback');

  return (
    <Tooltip content={t('not_enough_permission')}>{props.trigger}</Tooltip>
  );
};

export { ProtectFallback };
