-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT '📁',
  color TEXT NOT NULL DEFAULT '#6B7280',
  type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  amount DECIMAL(12, 2) NOT NULL CHECK (amount > 0),
  description TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_category_id ON transactions(category_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date);
CREATE INDEX IF NOT EXISTS idx_categories_user_id ON categories(user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_transactions_updated_at
  BEFORE UPDATE ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories for demo
-- Note: In production, these should be created per user
INSERT INTO categories (user_id, name, icon, color, type) VALUES
  ('00000000-0000-0000-0000-000000000000', 'Salary', '💰', '#10B981', 'income'),
  ('00000000-0000-0000-0000-000000000000', 'Freelance', '💼', '#3B82F6', 'income'),
  ('00000000-0000-0000-0000-000000000000', 'Investment', '📈', '#8B5CF6', 'income'),
  ('00000000-0000-0000-0000-000000000000', 'Food', '🍔', '#EF4444', 'expense'),
  ('00000000-0000-0000-0000-000000000000', 'Transportation', '🚗', '#F59E0B', 'expense'),
  ('00000000-0000-0000-0000-000000000000', 'Shopping', '🛍️', '#EC4899', 'expense'),
  ('00000000-0000-0000-0000-000000000000', 'Entertainment', '🎮', '#6366F1', 'expense'),
  ('00000000-0000-0000-0000-000000000000', 'Bills', '📄', '#6B7280', 'expense'),
  ('00000000-0000-0000-0000-000000000000', 'Healthcare', '🏥', '#14B8A6', 'expense')
ON CONFLICT DO NOTHING;
