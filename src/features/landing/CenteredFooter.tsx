import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const CenteredFooter = (props: {
  name: string;
  legalLinks: React.ReactNode;
}) => {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col items-center text-center">
      <ul className="mt-4 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60" />

      <div className="mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm max-md:flex-col">
        <div>
          © Copyright {new Date().getFullYear()} {props.name}.{' '}
          {t.rich('designed_by', {
            author: () => (
              <Link
                className="text-blue-500 hover:text-blue-600"
                href="https://github.com/daotanhao1406"
              >
                daotanhao1406
              </Link>
            ),
          })}
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </div>

        <ul className="flex gap-x-4 font-medium [&_a:hover]:opacity-100 [&_a]:opacity-60">
          {props.legalLinks}
        </ul>
      </div>
    </div>
  );
};

export { CenteredFooter };
