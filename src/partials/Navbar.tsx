import { Logo } from '@/partials/Logo';
import { NavMenuItem } from '@/partials/NavMenuItem';
import ThemeSwitcher from '@/partials/ThemeSwitcher';

export function Navbar() {
  return (
    <div className="mx-auto max-w-screen-lg px-5 py-10">
      <div className="flex w-full items-center justify-between">
        <a href="/" className="w-full">
          <Logo icon={<span></span>} name="Temp'ô coaching" />
        </a>

        <div className="flex w-full items-center justify-end gap-3">
          <NavMenuItem href="/">Qui suis-je</NavMenuItem>
          <NavMenuItem href="/posts/">Articles</NavMenuItem>
          <NavMenuItem href="/articles/">Gazettes</NavMenuItem>
          <NavMenuItem
            href="https://www.google.com/search?sca_esv=8bb27511c7a3bbb8&rls=en&sxsrf=ADLYWIJDcGhr6orKNTkAd-zdEZ_j7xjwKA:1736433315004&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dW3xp3tJnj0Tk5HekeKQFIKT9pZ_AgLGwdPAmmxigdnmSNsVjC7nm73wPKd0gf6TfC5UhgGWkcMzuO-RdFyghB8YCSdwDiJPf21kAjp5bAUqNNY_tSMXzuUOHo_aEhydZxAA9zQ&q=Temp%27ô+Coaching+Avis&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7gtRmvw0XQ4XDQhUkR_WBG-inuo3JWlhsjN1AZjpobgtqEV9oLHXsI-qbtSDc8_w4oz7DW4kyvNfgX9_qghGoOHEWKBJ&hl=fr-FR&sa=X&ved=2ahUKEwi80aqX7uiKAxViTaQEHXrUGDIQ_4MLegQISRAN&biw=1920&bih=1000&dpr=1"
            target="_blank"
          >
            Témoignages
          </NavMenuItem>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
