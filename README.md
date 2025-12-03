/*

📦 Project Root
│
├── 📄 server.ts
│     └─ ▶ অ্যাপ চালু করার ফাইল
│        └─ app.listen()  _+
│
├── 📄 app.ts
│     ├─ ▶ Express app তৈরি
│     ├─ ▶ Middleware গুলো ব্যবহার
│     ├─ ▶ Routes connect ("/api")
│     └─ ▶ Error handling middleware
│
├── 📁 config/
│     ├── 📄 env.ts
│     │     └─ dotenv.config() — ENV load করা
│     │
│     └── 📄 database.ts
│           └─ Database connection (PostgreSQL / MongoDB / etc.)
│
├── 📁 middleware/
│     ├── 📄 errorHandler.ts
│     │     └─ Global error handler
│     │
│     ├── 📄 auth.ts
│     │     └─ Token/JWT validation
│     │
│     └── 📄 validateRequest.ts
│           └─ Joi/Zod validation middleware
│
├── 📁 modules/
│     └── 📁 user/
│           ├── 📄 user.route.ts
│           │     └─ সব User API Route
│           │
│           ├── 📄 user.controller.ts
│           │     └─ Controller: Request → Response
│           │
│           ├── 📄 user.service.ts
│           │     └─ business Logic
│           │
│           └── 📄 user.model.ts (optional)
│                 └─ Schema / Types / ORM Model
│
└── 📁 utils/  (optional)
       ├── helper functions
       ├── response formatter
       └── custom error class

*/
/*

📦 Project Root
 ┣ 📜 server.ts  ---------------------> [ অ্যাপ চালু করার ফাইল: app.listen() ]
 ┣ 📜 app.ts     ---------------------> [ Express app তৈরি, Middleware ও Route কানেকশন ]
 ┃
 ┣ 📂 config/
 ┃ ┣ 📜 env.ts   ---------------------> [ dotenv.config() - ENV load করা ]
 ┃ ┗ 📜 db.ts ------------------> [ Database connection (PostgreSQL / MongoDB) ]
 ┃
 ┣ 📂 middleware/
 ┃ ┣ 📜 auth.ts ----------------------> [ Token/JWT ]
 ┃ ┗ 📜 logger.ts --------------------> [ Request logging middleware ]
 ┃
 ┗ 📂 modules/
   ┗ 📂 user/
     ┣ 📜 user.route.ts --------------> [ সব User API Route ]
     ┣ 📜 user.controller.ts ---------> [ Controller: Request → Response ]
     ┗ 📜 user.service.ts ------------> [ Business Logic ]

     */
