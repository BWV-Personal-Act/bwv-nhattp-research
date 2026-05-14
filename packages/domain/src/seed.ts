import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import path from 'path';
import dotenv from 'dotenv';
import { users, transferLogs } from './schema';
import { uid } from 'radash';
import { Nationality } from '@intern/factory';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function runSeed() {
  const connectionString = process.env.DATABASE_URL || '';
  const connection = await mysql.createConnection(connectionString);
  const db = drizzle(connection);

  try {
    const mockUsersData = Array.from({ length: 5 }).map((_, index) => ({
      name: `User Test ${index + 1}`,
      email: `user_${uid(6)}@example.com`,
      password: 'hashed_password_123',
      balance: "1000.00",
      nationality: Nationality.US,
      refreshToken: null,
    }));

    await db.insert(users).values(mockUsersData);
    
    const allUsers = await db.select().from(users);
    
    if (allUsers.length >= 2) {
      const mockTransfers = [
        {
          senderId: allUsers[0].id,
          receiverId: allUsers[1].id,
          amount: "50.00",
          status: 'success' as const,
          message: 'Initial transfer',
        },
        {
          senderId: allUsers[1].id,
          receiverId: allUsers[0].id,
          amount: "20.50",
          status: 'pending' as const,
          message: 'Coffee',
        }
      ];

      await db.insert(transferLogs).values(mockTransfers);
    }
  } catch (_error) {
  } finally {
    await connection.end();
    process.exit(0);
  }
}

runSeed();