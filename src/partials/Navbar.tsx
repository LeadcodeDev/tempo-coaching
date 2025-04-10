import { Dialog, DialogPanel } from '@headlessui/react';
import { EllipsisVerticalIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { Logo } from '@/partials/Logo';
import { NavMenuItem } from '@/partials/NavMenuItem';
import ThemeSwitcher from '@/partials/ThemeSwitcher';

const navigation = [
  { name: 'Qui suis-je', href: '/' },
  { name: 'Articles', href: '/posts/' },
  { name: 'Gazettes', href: '/articles/' },
  {
    name: 'Témoignages',
    target: '_blank',
    href: 'https://www.google.com/search?sca_esv=8bb27511c7a3bbb8&rls=en&sxsrf=ADLYWIJDcGhr6orKNTkAd-zdEZ_j7xjwKA:1736433315004&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dW3xp3tJnj0Tk5HekeKQFIKT9pZ_AgLGwdPAmmxigdnmSNsVjC7nm73wPKd0gf6TfC5UhgGWkcMzuO-RdFyghB8YCSdwDiJPf21kAjp5bAUqNNY_tSMXzuUOHo_aEhydZxAA9zQ&q=Temp%27ô+Coaching+Avis&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7gtRmvw0XQ4XDQhUkR_WBG-inuo3JWlhsjN1AZjpobgtqEV9oLHXsI-qbtSDc8_w4oz7DW4kyvNfgX9_qghGoOHEWKBJ&hl=fr-FR&sa=X&ved=2ahUKEwi80aqX7uiKAxViTaQEHXrUGDIQ_4MLegQISRAN&biw=1920&bih=1000&dpr=1',
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="w-full">
            <Logo icon={<span></span>} name="Temp'ô coaching" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <EllipsisVerticalIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavMenuItem key={item.name} href={item.href} target={item.target}>
              {item.name}
            </NavMenuItem>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="w-full">
              <Logo icon={<span></span>} name="Temp'ô coaching" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
