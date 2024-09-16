import React from 'react';
import { Suspense } from "react";
import Header from './components/header';

function App() {
    return (
    <>
        <Header />
    </>
  );
}

export default function WrappedApp(){
    return (
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    )
}
