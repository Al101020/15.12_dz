2026.09.09
	Перестал отображаться проект, http://localhost:5173/, начал сначала:
	- удалил всё, оставил папку .git,
	- В терминале запустил установку(Vite):
yarn create vite my-app --template react
		на вопросы ответил:
	◇  Which linter to use?
  	   - ESLint
    ◇  Install with yarn and start now?
       - No

	- Проект должен быть на React с маршрутизацией и Redux-Saga, установил:
yarn add react-router-dom redux redux-saga @reduxjs/toolkit react-redux


2026.09.07
    В терминале запустил установку(Vite):
yarn create vite my-app --template react
	(на вопросы ответил:
	◇  Which linter to use?
       -  ESLint
	◇  Install with yarn and start now? ● yes)
	
	- После установки появилась папка my-app(В нем удалил созданый README.md), 
	теперь содержимое этой папки перекидываю в родительскую папку:
mv my-app/* ./
	и файл .gitignore:
mv my-app/.* ./
	А папку(пустую) my-app удаляю.
    
	- Проект должен быть на React с маршрутизацией и Redux-Saga
yarn add react-router-dom redux redux-saga @reduxjs/toolkit react-redux




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

+++++++++++
https://practicum.yandex.ru/blog/redux-dlja-nachinajushih/
