# Fawry Assessment - Quantum Bookstore Management System

## 📋 Project Overview

This is a TypeScript-based bookstore management system developed as part of the Fawry assessment. The system demonstrates object-oriented programming principles, design patterns, and SOLID principles with features like inventory management, different book types, purchase workflows, and delivery services.

## 🎯 Project Purpose

The system simulates a complete bookstore management workflow including:
- Book inventory management with different book types
- Purchase operations with type-specific workflows
- Delivery services (shipping and email)
- Automated inventory cleanup
- Error handling and validation
- Stock quantity management

## ✨ Features

### Core Features
- **Book Management**: Support for different book types (Paper Books, E-Books, Showcase Books)
- **Inventory Operations**: Add/remove books with quantity validation
- **Purchase Workflows**: Type-specific purchase processing
- **Delivery Services**: Shipping and email delivery integration
- **Automated Cleanup**: Remove outdated books based on age criteria
- **Error Handling**: Comprehensive error handling and validation
- **Stock Management**: Inventory tracking and validation

### Book Types
1. **Paper Books**: Physical books with shipping requirements and stock management
2. **E-Books**: Digital books with email delivery and file type specification
3. **Showcase Books**: Display-only books (not for sale)

## 🗂️ Project Structure

```
fawry_task2/
├── index.ts                      # Main entry point with test execution
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project documentation
├── errorHandler.ts               # Error handling utilities
├── build/                        # Compiled JavaScript files
│   ├── index.js
│   ├── errorHandler.js
│   ├── inventory/
│   │   └── bookInventory.js
│   ├── main/
│   │   └── bookstoreFullTest.js
│   ├── models/
│   │   ├── book.js
│   │   ├── ebook.js
│   │   ├── index.js
│   │   ├── paperBook.js
│   │   └── showCaseBook.js
│   └── services/
│       ├── index.js
│       ├── mailServices.js
│       └── shippingServices.js
├── inventory/                    # Inventory management
│   └── bookInventory.ts         # Core inventory operations
├── main/                        # Main application and tests
│   └── bookstoreFullTest.ts     # Comprehensive test suite
├── models/                      # Data models and entities
│   ├── book.ts                  # Abstract base class
│   ├── ebook.ts                 # E-book implementation
│   ├── index.ts                 # Model exports
│   ├── paperBook.ts             # Paper book implementation
│   └── showCaseBook.ts          # Showcase book implementation
└── services/                    # Business services
    ├── index.ts                 # Service exports
    ├── mailServices.ts          # Email delivery service
    └── shippingServices.ts      # Shipping service
```

## 🔧 Technical Architecture

### Class Hierarchy
```
Book (Abstract Base Class)
├── PaperBook (extends Book)
├── EBook (extends Book)
└── ShowcaseBook (extends Book)
```

### Key Components

#### 1. Book System (`models/`)
- **Book** (Abstract): Base class with common properties (isbn, title, author, year, price)
- **PaperBook**: Physical books with stock management and shipping
- **EBook**: Digital books with file type and email delivery
- **ShowcaseBook**: Display-only books without purchase functionality

#### 2. Inventory Management (`inventory/`)
- **BookInventory**: Core inventory operations with type-specific processing
- **Purchase Workflows**: Different processing for each book type
- **Stock Management**: Quantity tracking and validation

#### 3. Service Layer (`services/`)
- **ShippingService**: Handles physical book shipping
- **MailService**: Handles digital book email delivery

#### 4. Test System (`main/`)
- **BookstoreFullTest**: Comprehensive test suite demonstrating all features

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yusufafify/fawry_quantum_bookstore_assessment.git
   cd fawry_quantum_bookstore_assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Using npm scripts (Recommended)
```bash
# Build and run the application
npm run test

# Or build and start separately
npm run build
npm start
```

#### Option 2: Manual compilation
```bash
# Compile TypeScript to JavaScript
npx tsc

# Run the compiled JavaScript
node build/index.js
```

### Available Scripts

- `npm run build` - Compile TypeScript files to JavaScript
- `npm start` - Run the compiled application
- `npm test` - Build and run the application (same as build + start)

## � Test Cases

The application includes comprehensive test cases that demonstrate various scenarios:

1. **Book Addition**: Testing addition of different book types to inventory
2. **Outdated Book Removal**: Automatic cleanup of books older than specified age
3. **Successful Purchases**: Normal checkout process for different book types
4. **Error Handling**: Invalid purchase attempts and error scenarios
5. **Stock Validation**: Ensuring adequate stock before purchase
6. **Delivery Processing**: Testing shipping and email delivery workflows
7. **Type-specific Workflows**: Different processing for Paper Books vs E-Books
8. **Showcase Book Restrictions**: Validation that showcase books cannot be purchased

## 💡 Task Rules

### Book Management
- **Unique ISBN**: Each book must have a unique ISBN identifier
- **Stock Tracking**: Physical and digital books maintain stock quantities
- **Age-based Cleanup**: Books older than specified years are automatically removed
- **Type-specific Processing**: Different purchase workflows for different book types

### Purchase Process
1. Validate book exists in inventory
2. Check book type and apply appropriate workflow
3. Validate delivery information (address for shipping, email for digital)
4. Process purchase and update stock
5. Trigger appropriate delivery service
6. Return total cost to customer

## 🛠️ Development

### Code Style
- Written in TypeScript with strict type checking
- Object-oriented design with inheritance and polymorphism
- Modular architecture with clear separation of concerns
- Comprehensive error handling and validation

### Key Design Patterns
- **Template Method**: Abstract Book class with concrete implementations
- **Strategy Pattern**: Different delivery strategies for different book types
- **Service Layer**: Separate services for shipping and email operations
- **Factory Pattern**: Book creation through specialized constructors

## � Example Usage

```typescript
// Import required classes
import { BookInventory } from "./inventory/bookInventory";
import { PaperBook, EBook, ShowcaseBook } from "./models";

// Create inventory
const inventory = new BookInventory();

// Add different types of books
const paperBook = new PaperBook("P001", "TypeScript Basics", "John Doe", 2020, 29.99, 10);
const ebook = new EBook("E001", "Advanced TS", "Jane Smith", 2022, 19.99, 100, "PDF");
const showcase = new ShowcaseBook("S001", "TS Showcase", "Acme Inc", 2023, 0);

inventory.addBook(paperBook);
inventory.addBook(ebook);
inventory.addBook(showcase);

// Process purchases
const paperCost = inventory.buyBook("P001", 1, { address: "123 Main St" });
const ebookCost = inventory.buyBook("E001", 2, { email: "user@example.com" });

// Remove outdated books
const outdated = inventory.removeOutdatedBooks(2024, 3);
```

## 🔍 Sample Output

```
Add books test passed
removed book with ISBN = P001
Removed 1 outdated books
Quantum book store: Shipping TypeScript Basics to 123 Main St
Bought paper book for $29.99
Quantum book store: Sending Advanced TS (PDF) to user@example.com
Bought ebooks for $39.98
Showcase purchase error handled: Showcase books cannot be purchased
```

## 📚 SOLID Principles Implementation

### Single Responsibility Principle (SRP)
- Each class has a single, well-defined responsibility
- `BookInventory` manages inventory operations only
- `MailService` handles email delivery only
- `ShippingService` handles physical shipping only

### Open/Closed Principle (OCP)
- Easy to add new book types without modifying existing code
- New delivery services can be added without changing existing ones
- System is open for extension, closed for modification

### Liskov Substitution Principle (LSP)
- All book types can be used interchangeably where `Book` is expected
- Subclasses maintain the contract defined by the base class
- Polymorphic behavior works correctly

### Interface Segregation Principle (ISP)
- Each service has a specific, minimal interface
- Classes don't depend on methods they don't use
- Focused, targeted service methods

### Dependency Inversion Principle (DIP)
- Code depends on abstractions (Book class) rather than concrete implementations
- High-level modules don't depend on low-level modules
- Easy to swap implementations without changing high-level code

**Note**: This project demonstrates TypeScript OOP principles, design patterns, and SOLID principles for Fawry assessment purposes.
