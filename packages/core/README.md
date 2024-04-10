# Webvar - Astro Components

Welcome to Webvar Components, a unique solution designed to simplify web development for everyone. As a developer, I've seen firsthand the challenges of maintaining personal and small business websites. The advent of Astro JS opened a new world of possibilities, but it left a gap: the need for self-maintainable components. This inspired the creation of Webvar Components, a library built with simplicity and user-friendliness in mind.

Webvar Components are crafted using Astro files, HTML, Tailwind CSS, and vanilla JavaScript, ensuring compatibility and reducing the complexity of integrating multiple frameworks. Our goal is to make web development more accessible, allowing developers to focus on creating beautiful, functional, and self-maintainable websites without the overhead of managing multiple technologies.

Join us on this journey to make web development more accessible and enjoyable for everyone. Through Webvar Components, we aim to inspire and empower developers to create websites that truly reflect their vision, with minimal effort.

## Quick Start

### Adding it to your Astro project

#### npm

```bash
npm install astro-webvar-components
```

#### pnpm

```bash
pnpm install astro-webvar-components
```

#### yarn

```bash
yarn install astro-webvar-components
```

### Start using the components

After installing the `astro-webvar-components` package, you can start using the components in your AstroJS project. Here's a basic example of how to use a component from the library:

```astro
astro import { Button } from 'astro-webvar-components';

<Button variant="primary" size="lg">Click Me</Button>
```

This example imports and uses the `Button` component from the `astro-webvar-components` package. You can replace `Button` with any other component available in the library.

### Customizing Components

Webvar Components are designed to be highly customizable. You can pass props to components to customize their appearance and behavior. For example, to customize a `Button` component:

```astro
astro import { Button } from 'astro-webvar-components';

<Button variant="danger" size="sm" class="mr-2">Delete</Button>
```

This example creates a small, danger-themed button with a margin to the right.

### Using Tailwind CSS

Since Webvar Components are styled with Tailwind CSS, you can use any Tailwind utility classes to further customize the appearance of the components. For example:

```astro
astro import { Button } from 'astro-webvar-components';

<Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Custom Button </Button>
```

This example creates a custom-styled button using Tailwind CSS classes.

### Conclusion

Webvar Components make it easy to add beautiful, responsive, and customizable components to your AstroJS projects. Whether you're building a static site, a blog, or a complex web application, Webvar Components can help you get started quickly and maintain a consistent design across your project.
