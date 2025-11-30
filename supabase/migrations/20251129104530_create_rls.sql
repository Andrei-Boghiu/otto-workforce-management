-- Drop old table & policies
DROP TABLE IF EXISTS todos CASCADE;

-- Create table
CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(256) NOT NULL,
  content TEXT,
  done BOOLEAN DEFAULT FALSE,
  owner_id UUID NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "view_own_todos"
  ON todos FOR SELECT
  USING (auth.uid() = owner_id);

CREATE POLICY "insert_own_todos"
  ON todos FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "update_own_todos"
  ON todos FOR UPDATE
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "delete_own_todos"
  ON todos FOR DELETE
  USING (auth.uid() = owner_id);

-- Index for performance
CREATE INDEX todos_owner_id_idx ON todos(owner_id);
