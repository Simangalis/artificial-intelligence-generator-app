/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Contentapp_owner:D1PIXLvwWji4@ep-dark-brook-a57qjmd2.us-east-2.aws.neon.tech/Contentapp?sslmode=require'
    }
  }; 