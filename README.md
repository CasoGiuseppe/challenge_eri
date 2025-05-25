# Project Documentation:: Challenge Eri

## 1. Project Overview and Technology Stack

This document outlines the architecture, key technologies, and design philosophies behind our Vue 3 application. Built with the Composition API, this project leverages modern Vue features to create a robust, scalable, and maintainable frontend solution.

## 2. Vue 3 and Composition API

### Why Vue 3 with Composition API?

Vue 3 was chosen as the core framework for its performance improvements, better TypeScript support, and the introduction of the Composition API. The Composition API provides a powerful and flexible way to organize and reuse logic within Vue components, moving beyond the limitations of the Options API for larger applications.

### Key Benefits Leveraged:

- Improved Code Organization: Logic related to a specific feature (e.g., fetching data, form handling) can be grouped together, even if it involves multiple lifecycle hooks or reactive properties. This enhances readability and maintainability, especially for complex components.
- Enhanced Reusability through Composables: The Composition API allows us to extract reusable pieces of stateful logic into functions called composables. These composables are self-contained, reactive, and can be easily shared across multiple components without mixing concerns or relying on mixins that can lead to naming collisions and unclear origins of data.
- Superior TypeScript Support: Vue 3's Composition API was designed with TypeScript in mind from the ground up, providing excellent type inference and autocompletion, which significantly improves developer experience and reduces runtime errors.
- Better Performance: Vue 3 features a re-written virtual DOM and optimized reactivity system, leading to smaller bundle sizes and faster rendering performance compared to Vue 2.

### Composables in Action

Composables are functions that encapsulate reusable stateful logic. In this project, they are used extensively to abstract common functionalities.

## 3. State Management with Pinia

### Why Pinia for State Management?

Pinia was selected as the state management library for this project, superseding Vuex as the officially recommended solution for Vue 3.

### Key Reasons for Choosing Pinia:

- Lightweight and Intuitive: Pinia offers a much simpler API compared to Vuex. It feels more like writing plain Vue 3 Composition API code, reducing boilerplate and making state management more intuitive.
- Full TypeScript Support: Pinia is designed with TypeScript in mind, providing excellent type inference out of the box. This means better autocompletion, type checking for states, getters, actions, and less need for manual type declarations, leading to more robust code.
- Modular by Design: Pinia stores are inherently modular and independent. This encourages better organization, as each store typically manages a specific domain of the application's state (e.g., userStore, productStore). This modularity makes it easier to understand, test, and maintain individual pieces of state.
- No Mutations: Unlike Vuex, Pinia doesn't have the concept of "mutations." All state changes are made directly within "actions," which simplifies the mental model and reduces verbosity. This also aligns well with the Composition API's approach to reactivity.
- DevTools Integration: Pinia provides excellent integration with Vue DevTools, offering a clear overview of state, mutations (actions), and time-travel debugging capabilities.
- Smaller Bundle Size: Pinia is generally lighter than Vuex, contributing to smaller application bundle sizes.

## 4. Screaming Architecture

### Why Screaming Architecture?

This project adopts a Screaming Architecture approach, where the directory structure "screams" the domain and purpose of the application rather than screaming the framework. This philosophy prioritizes features and business domains over technical concerns (like components, views, services, stores all at the root level).

### Key Principles and Benefits:

- Feature-Driven Organization: Instead of grouping files by their technical type (e.g., all components in one folder), files are organized by the feature or domain they belong to. For instance, a /users folder might contain UserList.vue, UserDetail.vue, userStore.ts, userComposables.ts, and userRoutes.ts.
- Improved Discoverability: When a new developer joins the project or when revisiting a feature, it's immediately clear where all related files reside. You don't have to jump between many root-level folders to understand a single feature.
- Enhanced Scalability: As the application grows, adding new features becomes straightforward. Each feature is encapsulated within its own directory, minimizing conflicts and making it easier to manage a large codebase.
- Better Maintainability: Changes to a specific feature are localized within its dedicated directory. This reduces the risk of unintended side effects in other parts of the application and simplifies refactoring.
  Clearer Boundaries: It enforces clearer boundaries between different parts of the application, making it easier to reason about dependencies and responsibilities.

### Folder structure

```sh
src/
├── app/
│   ├── router/
│   └── shared/
│   │   └── composables
│   │   └── stores
│   │   └── tests
│   │   └── types
│   │   └── utilities
│   └── translation/
│   └── ui/
│       └── components/
│           └── abstracts
│           └── base
│           └── elements
│           └── states
│           └── tools
├── assets/
│   ├── _abstracts
│   ├── layers
│   └── mixins
│   └── tools
├── modules/
│   ├── core/
│   │   ├── data
│   │   ├── dependencies
│   │   └── domain/
│   │         └── exceptions/
│   │               └── models
│   │         └── valueObjects/
│   │               └── __test__
│   │               └── abstracts
│   │   └── guards/
│   │         └── exceptions
│   │   ├── presentation
│   │   ├── providers/
│   │   │     └── providerType
│   │   ├── utilities
│   ├── domainType/
│   │   ├── __test___
│   │   ├── data
│   │   │     ├── model/
│   │   │     │     └── mapper
│   │   │     └── repository
│   │   ├── domain
│   │   │     ├── application/
│   │   │     │     └── use-cases
│   │   │     ├── core
│   │   │     │     └── repository
│   │   ├── presentation
│   │   │     ├── bloc
│   │   │     ├── guards/
│   │   │     │     └── __test__
│   │   │     ├── router
│   │   │     ├── store
│   │   │     ├── translations/
│   │   │     │     └── locales
│   │   │     ├── ui
├── stories/
```

## 5. Unit Testing

### Why Unit Testing?

Unit testing is an integral part of our development workflow. We leverage unit tests to ensure the reliability, correctness, and maintainability of individual units of code (components, composables, store actions, utility functions).

### Key Benefits of Unit Testing:

- Early Bug Detection: Unit tests catch bugs at an early stage of development, preventing them from propagating into later phases where they are more expensive and time-consuming to fix.
- Improved Code Quality: Writing unit tests encourages developers to write modular, testable, and loosely coupled code, leading to a better overall design.
- Refactoring Confidence: With a strong suite of unit tests, developers can refactor code with confidence, knowing that existing functionalities are not broken by changes.
- Living Documentation: Well-written unit tests serve as executable documentation for the individual units of code, demonstrating their intended behavior and usage.
- Faster Feedback Loop: Unit tests run quickly, providing immediate feedback on whether recent changes have introduced regressions.
  Reduced Regression: They prevent regressions, ensuring that new features or bug fixes don't unintentionally break existing functionalities.

### Tools Used:

- Vitest: As the test runner, chosen for its speed, compatibility with Vite, and familiar Jest-like API.
- Vue Test Utils: The official testing utility library for Vue, providing convenient methods to mount and interact with Vue components in a testing environment.

## 6. Component Documentation with Storybook

### Why Storybook for Component Documentation?

Storybook is utilized in this project as a robust tool for developing, documenting, and testing UI components in isolation. It acts as a living style guide and a development playground for our Vue components.

## Key Advantages of Using Storybook:

- Isolated Component Development: Storybook allows developers to build UI components in isolation from the main application logic and data. This simplifies development, speeds up iteration, and ensures components are truly reusable.
- Comprehensive Component Documentation: It provides a dedicated environment for documenting each component's props, events, slots, and various states (stories). This serves as a single source of truth for UI components, making it easier for designers, developers, and QA engineers to understand and use them correctly.
- Visual Regression Testing: With addons like Storybook's Interactions addon, we can write tests that simulate user behavior and verify component rendering across different states, contributing to visual regression testing.
- Design System Compliance: Storybook is an excellent tool for enforcing consistency and adherence to a design system. It ensures that components look and behave as expected across the application.
- Collaboration: It facilitates collaboration between designers and developers by providing a shared, visual playground for components, reducing friction and misunderstandings.
- QA and Review: QA engineers can use Storybook to easily test different component states without navigating through the entire application, streamlining the review process.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
