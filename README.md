# Setup del progetto

## Creazione directory

```bash
npm create vite@latest nome_progetto
cd nome_progetto
npm install
code .
```

### Solo per Martina
Se npm run dev continua a non funzionare per la versione di node segui questi passaggi

```bash
nvm install 20.17.0
nvm use 20.17.0
rm -rf node_modules package-lock.json
npm uninstall vite
npm install vite@5.2.10 --save-dev
npm run dev
```

Questo dovrebbe risolverti tutti i problemi :)

## Installazione dipendenze

### Chakra UI
```bash
npm i @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add
```

Nel file tsconfig.app.json assicurarsi che siano state fatte le seguenti modifiche, altrimenti aggiungerle.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Nel file main.tsx aggiungere il Provider di Chakra

```
import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
```

Per ultimo, eseguire il seguente comando
```bash
npm i -D vite-tsconfig-paths
```

e aggiornare il file vite.config.ts
```
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```

### Bootstrap

```bash
npm install bootstrap @popperjs/core
```

Nel file main.tsx aggiungere

```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### React Router
Eseguire il seguente comando:
```bash
npm i react-router
```

Nel file main.tsx aggiungere BrowserRuter
```
import { BrowserRouter, Route, Routes } from 'react-router'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

Se hai già inserito anche il Provider di Chakra Ui, BrowserRouter dovrà stare all'esterno di questo. Qui un esempio completo anche delle rotte.
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Provider } from './components/ui/provider.tsx'
import './index.css'
import App from './routes/App.tsx'
import Home from './routes/Home.tsx'
import SearchPage from './routes/SearchPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path='/' element={<App />}>
            {/* Homepage */}
            <Route index element={<Home />} />
              
            {/* Ricerca */}
            <Route path="search" element={<SearchPage />} />
          </Route>

        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
```

## Setup Git
In VSCode nella tab Source Control cliccare **Initalize Repository**, fare la prima commit con il messaggio *inizializzazione progetto*.

Una volta fatto il commit cliccare su **Publish Branch** e scegliere se si vuole creare una repository pubblica o privata (per l'esame credo convenga pubblica, per evitare che i membri della commissione non possano accedervi per mancanza di permessi/non sono collaboratori nel repository).

## Compilazione del documento tecnico
I passaggi essenziali da non dimenticarsi sono i seguenti:
- navigare nella directory del progetto da terminale usando il comando 
```bash
cd nome_directory
```
- eseguire il comando
```bash
npm install
```
- per aprire il progetto in Visual Studio Code eseguire
```bash
code .
```
- altrimenti per avviare il progetto eseguire
```bash
npm run dev
```

## Consegna
Prima di consegnare esegui questo comando
```bash
rm -rf node_modules dist
```
