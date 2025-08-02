# 🌟 She Can Foundation - Fundraising Platform

> **Empowering Women Through Technology and Community**

A modern, full-stack fundraising platform built for the She Can Foundation to track intern fundraising activities, achievements, and impact metrics. This platform enables interns to compete in fundraising challenges while supporting women empowerment initiatives.

![Platform Banner](public/images/login.png)

---

## 🎯 **Project Overview**

The She Can Foundation Fundraising Platform is designed to gamify and track fundraising efforts by interns. It provides a comprehensive dashboard system where users can monitor their progress, compete on leaderboards, unlock achievements, and see the real-world impact of their contributions.

### ✨ **Key Highlights**
- **Gamified Experience**: Achievement system with unlockable badges and rewards
- **Real-time Leaderboards**: Competitive rankings with progress visualization
- **Impact Tracking**: Shows direct correlation between donations and women empowered
- **Modern UI/UX**: Dark theme with She Can Foundation branding
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with smooth animations

---

## 🚀 **Technology Stack**

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for SPA navigation
- **Axios** - HTTP client for API communication

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Mongoose** - ODM for MongoDB and Node.js
- **CORS** - Cross-origin resource sharing middleware

### **Database Schema**
```javascript
// User Schema
{
  name: String,
  referralCode: String (unique),
  donations: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📱 **Application Screenshots**

### **Authentication System**
<div align="center">
  <img src="public/images/login.png" alt="Login Page" width="45%">
  <img src="public/images/signup.png" alt="Signup Page" width="45%">
</div>

*Secure login and registration system with She Can Foundation branding*

### **User Dashboard**
![Dashboard](public/images/dashboard.png)

*Personalized dashboard showing user stats, impact metrics, and achievements*

### **Leaderboard System**
![Leaderboard](public/images/leader.png)

*Competitive rankings with progress bars and detailed statistics*

### **Achievement System**
![Achievements](public/images/d2.png)

*Gamified badge system to motivate fundraising efforts*

---

## 🎥 **Platform Demo**

### **Complete Platform Walkthrough**
<div align="center">
  <video width="80%" controls>
    <source src="public/video/platform-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

*Full demonstration of login, dashboard navigation, leaderboard interaction, and achievement unlocking*

### **Mobile Responsiveness Demo**
<div align="center">
  <video width="40%" controls>
    <source src="public/video/mobile-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

*Platform functionality across different device sizes and orientations*

---

## 🏗️ **Project Structure**

```
she-can-foundation-platform/
├── 📁 backend/
│   ├── 📁 models/
│   │   └── User.js              # MongoDB user schema
│   ├── 📁 routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── api.js               # API endpoints
│   ├── 📁 middleware/
│   │   └── cors.js              # CORS configuration
│   ├── server.js                # Express server setup
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Dashboard.jsx    # User dashboard component
│   │   │   ├── Leaderboard.jsx  # Leaderboard component
│   │   │   ├── Login.jsx        # Login component
│   │   │   └── Signup.jsx       # Signup component
│   │   ├── 📁 hooks/
│   │   │   └── useAuth.js       # Authentication hook
│   │   ├── App.jsx              # Main application component
│   │   └── main.jsx             # Application entry point
│   ├── 📁 public/
│   │   ├── 📁 images/           # Screenshots and images
│   │   └── 📁 video/            # Demo videos
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
├── README.md                    # Project documentation
└── .gitignore                   # Git ignore rules
```

---

## ⚡ **Quick Start Guide**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Git

### **1. Clone Repository**
```bash
git clone https://github.com/your-username/she-can-foundation-platform.git
cd she-can-foundation-platform
```

### **2. Backend Setup**
```bash
cd backend
npm install

# Create .env file with your configuration
echo "MONGODB_URI=your_mongodb_atlas_connection_string" > .env
echo "PORT=5000" >> .env
echo "JWT_SECRET=your_jwt_secret_key" >> .env

# Start development server
npm run dev
# Server runs on http://localhost:5000
```

### **3. Frontend Setup**
```bash
cd frontend
npm install

# Start development server
npm run dev
# Application runs on http://localhost:5173
```

### **4. Database Configuration**
1. Create a [MongoDB Atlas](https://www.mongodb.com/atlas) account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in your `.env` file
5. Whitelist your IP address in Atlas

---

## 🎯 **Core Features**

### **🔐 Authentication System**
- User registration and login
- Secure password handling
- JWT token-based authentication
- Protected routes and middleware

### **📊 Dashboard Analytics**
- **Personal Stats**: Individual fundraising metrics
- **Impact Visualization**: Shows real-world impact of donations
- **Progress Tracking**: Visual progress bars to next milestones
- **Referral Code**: Unique codes for tracking referrals

### **🏆 Leaderboard & Competition**
- **Real-time Rankings**: Live updates of fundraising standings
- **Progress Visualization**: Relative performance bars
- **Statistics Summary**: Total participants, funds raised, averages
- **Achievement Highlights**: Top performer recognition

### **🏅 Achievement System**
- **Bronze Supporter** (₹500+) - First step in empowerment
- **Silver Champion** (₹1000+) - Making real impact  
- **Gold Advocate** (₹2000+) - Leading the change
- **Platinum Hero** (₹5000+) - Transforming lives
- **Community Leader** (₹10000+) - Inspiring others
- **Changemaker** (₹25000+) - Revolutionary impact

### **📱 Responsive Design**
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interfaces
- Consistent experience across devices

---

## 🛠️ **API Documentation**

### **Base URL**: `http://localhost:5000/api`

### **Endpoints**

#### **GET /api/user**
```javascript
// Response
{
  "name": "Priya Sharma",
  "referralCode": "priya2025",
  "donations": 1250,
  "createdAt": "2025-01-15T10:30:00Z"
}
```

#### **GET /api/leaderboard**
```javascript
// Response
[
  {
    "name": "Priya Sharma",
    "donations": 2500,
    "referralCode": "priya2025"
  },
  {
    "name": "Anita Desai", 
    "donations": 2100,
    "referralCode": "anita2025"
  }
]
```

#### **POST /api/auth/login**
```javascript
// Request
{
  "email": "priya@example.com",
  "password": "password123"
}

// Response
{
  "token": "jwt_token_here",
  "user": {
    "name": "Priya Sharma",
    "email": "priya@example.com"
  }
}
```

---

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Red (#EF4444) to Orange (#F97316) gradients
- **Background**: Gray-900 (#111827) for dark theme
- **Cards**: Gray-800 (#1F2937) with Gray-700 borders
- **Text**: White (#FFFFFF) primary, Gray-400 (#9CA3AF) secondary
- **Success**: Green-400 (#4ADE80) for achievements
- **Warning**: Yellow-400 (#FACC15) for milestones

### **Typography**
- **Headers**: Bold, 2xl-5xl sizes for impact
- **Body**: Regular weight, readable sizes
- **Monospace**: Referral codes and technical data
- **Gradients**: Text gradients for brand elements

### **Components**
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Progress Bars**: Animated, gradient fills
- **Badges**: Color-coded achievement indicators

---

## 🔧 **Development Guide**

### **Environment Variables**
```bash
# Backend (.env)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
JWT_SECRET=your-secret-key
NODE_ENV=development

# Frontend (.env)
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=She Can Foundation Platform
```

### **Scripts**
```json
// Backend package.json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  }
}

// Frontend package.json  
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src"
  }
}
```

### **Build for Production**
```bash
# Frontend build
cd frontend
npm run build
# Creates optimized build in dist/

# Backend deployment
cd backend
npm start
# Runs production server
```

---

## 🧪 **Testing & Quality**

### **Testing Strategy**
- **Unit Tests**: Component and function testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: User flow testing
- **Performance Tests**: Load and stress testing

### **Code Quality Tools**
- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates
- **Jest**: Testing framework

---

## 🚀 **Deployment Options**

### **Frontend Deployment**
- **Vercel**: Automatic deployments from Git
- **Netlify**: Static site hosting with CD
- **GitHub Pages**: Free hosting for static sites

### **Backend Deployment**
- **Heroku**: Easy Node.js deployment
- **Railway**: Modern app deployment
- **DigitalOcean**: VPS hosting
- **AWS EC2**: Scalable cloud hosting

### **Database Hosting**
- **MongoDB Atlas**: Managed MongoDB service (Recommended)
- **MongoDB Self-hosted**: VPS installation

---

## 📈 **Performance Optimizations**

### **Frontend Optimizations**
- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching Strategy**: Service worker implementation

### **Backend Optimizations**
- **Database Indexing**: Optimized queries
- **Compression**: Gzip middleware
- **Rate Limiting**: API protection
- **Monitoring**: Performance metrics

---

## 🤝 **Contributing**

We welcome contributions to improve the She Can Foundation platform! Here's how you can help:

### **Getting Started**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Use meaningful commit messages

### **Areas for Contribution**
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 **Team & Acknowledgments**

### **Development Team**
- **Lead Developer**: [Your Name]
- **UI/UX Designer**: [Designer Name]
- **Backend Developer**: [Backend Dev Name]

### **Special Thanks**
- **Reeta Mishra** - Founder & President, She Can Foundation
- **She Can Foundation** - For the opportunity to contribute to women empowerment
- **Open Source Community** - For the amazing tools and libraries

---

## 📞 **Support & Contact**

### **Technical Support**
- **Email**: pranshu20042004@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/priyanshu-dixit/



---

## 🌟 **What's Next?**

### **Upcoming Features**
- [ ] **Real-time Notifications** - WebSocket integration for live updates
- [ ] **Mobile App** - React Native mobile application
- [ ] **Advanced Analytics** - Detailed reporting and insights
- [ ] **Social Sharing** - Share achievements on social media
- [ ] **Donation Integration** - Direct payment gateway integration
- [ ] **Multilingual Support** - Hindi and other regional languages

### **Long-term Vision**
- Scale to support multiple foundations
- AI-powered fundraising insights
- Blockchain transparency features
- Global expansion capabilities

---

<div align="center">

**🌟 Star this repository if you found it helpful! 🌟**

**Together, we can break down barriers and empower women.**

*Built with ❤️ for She Can Foundation*

</div>
