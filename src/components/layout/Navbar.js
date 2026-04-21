import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'

function Navbar() {
  return _jsx('header', {
    className: 'border-b border-slate-200 bg-white/80 backdrop-blur',
    children: _jsxs('div', {
      className: 'mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8',
      children: [
        _jsxs('div', {
          children: [
            _jsx('p', {
              className: 'text-lg font-bold tracking-tight text-slate-900',
              children: 'Dash Owner',
            }),
            _jsx('p', {
              className: 'text-sm text-slate-500',
              children: 'React + Tailwind starter',
            }),
          ],
        }),
        _jsxs('nav', {
          className: 'hidden gap-6 text-sm font-medium text-slate-600 md:flex',
          children: [
            _jsx('a', {
              className: 'transition hover:text-slate-900',
              href: '#features',
              children: 'Features',
            }),
            _jsx('a', {
              className: 'transition hover:text-slate-900',
              href: '#structure',
              children: 'Structure',
            }),
            _jsx('a', {
              className: 'transition hover:text-slate-900',
              href: '#start',
              children: 'Start',
            }),
          ],
        }),
      ],
    }),
  })
}

export default Navbar
