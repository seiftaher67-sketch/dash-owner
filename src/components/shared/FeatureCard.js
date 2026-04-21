import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'

function FeatureCard({ title, description }) {
  return _jsxs('article', {
    className:
      'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg',
    children: [
      _jsx('h3', {
        className: 'text-lg font-semibold text-slate-900',
        children: title,
      }),
      _jsx('p', {
        className: 'mt-3 text-sm leading-6 text-slate-600',
        children: description,
      }),
    ],
  })
}

export default FeatureCard
