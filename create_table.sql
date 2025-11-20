-- Create feedback table
CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  favorite_part TEXT,
  improvements TEXT,
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert feedback
CREATE POLICY "Allow public inserts" ON feedback
FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to read feedback
CREATE POLICY "Allow public reads" ON feedback
FOR SELECT USING (true);