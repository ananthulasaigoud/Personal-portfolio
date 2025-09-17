# My Digital Showcase

A modern, responsive portfolio website built with cutting-edge web technologies to showcase my projects, skills, and professional journey.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Built with shadcn/ui and Tailwind CSS
- **Type Safety**: Written in TypeScript
- **Fast Development**: Powered by Vite
- **Interactive Components**: Includes various Radix UI components
- **Theming**: Dark/light mode support
- **Contact Form**: Integrated with EmailJS for seamless email communication
- **Mobile-First**: Optimized for all screen sizes with responsive design

## 🛠️ Technologies Used

- ⚡ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🎭 [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- 📧 [EmailJS](https://www.emailjs.com/) - For handling contact form submissions
- 🔄 [React Query](https://tanstack.com/query/latest) - Data fetching and state management
- 📅 [date-fns](https://date-fns.org/) - Modern date utility library
- ✨ [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- EmailJS account (for contact form functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/my-digital-showcase.git
   cd my-digital-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in your browser**
   The app should now be running at [http://localhost:5173](http://localhost:5173)

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🔒 Environment Variables

The following environment variables are required for the contact form to work:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

Add these to your `.env` file. Make sure to add `.env` to your `.gitignore` to keep your credentials secure.

## 📂 Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # Reusable UI components
│   ├── Contact.tsx  # Contact form with EmailJS integration
│   ├── Hero.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Projects.tsx # Projects showcase
│   ├── Skills.tsx   # Skills and technologies
│   └── Footer.tsx   # Site footer
├── hooks/           # Custom React hooks
└── lib/             # Utility functions and configurations
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the amazing developer experience
- [EmailJS](https://www.emailjs.com/) for easy email integration

## 📬 Contact

For any questions or feedback, please reach out via the contact form on the website or directly at [your.email@example.com](mailto:your.email@example.com).
