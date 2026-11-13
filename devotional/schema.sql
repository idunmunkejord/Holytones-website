-- The devotional subscriber list and the record of what each reader has received.
-- Times are ISO 8601 strings in UTC, so they sort and compare as text.

CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  lang TEXT NOT NULL DEFAULT 'no',
  -- Ticked "also send me the Holytones newsletter" when signing up.
  newsletter INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'unsubscribed')),
  confirm_token TEXT NOT NULL UNIQUE,
  unsubscribe_token TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  confirm_sent_at TEXT,
  confirmed_at TEXT,
  unsubscribed_at TEXT,
  -- The next devotional this reader should get, and when.
  next_day INTEGER NOT NULL DEFAULT 1,
  next_send_at TEXT,
  last_sent_at TEXT
);

CREATE INDEX IF NOT EXISTS subscribers_due ON subscribers (status, next_send_at);

-- One row per devotional sent; the key makes it impossible to record a day twice.
CREATE TABLE IF NOT EXISTS sends (
  subscriber_id INTEGER NOT NULL REFERENCES subscribers (id),
  day INTEGER NOT NULL,
  sent_at TEXT NOT NULL,
  message_id TEXT,
  PRIMARY KEY (subscriber_id, day)
);
