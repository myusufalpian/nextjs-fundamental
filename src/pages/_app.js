import AppShell from './../components/layouts/AppShell'
import './../styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
  );
}
