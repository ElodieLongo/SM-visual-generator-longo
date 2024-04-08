USE mysql_project_db;

INSERT INTO users (username, password)
VALUES 
    ("banana", "$2b$10$/1UfZvXYrToAGa5mO1IbfesmFQJ42WIlI60swCyafhzrB/2KcD1RK"),
    ("apple", "#2b$10$/1UfZvXYpToAGa5mO1IbfesmFQJ42WIlI60swCyafhzrB/2KcD1RK");


INSERT INTO 
  quotes (tag, text)
  VALUES
   ("Nature", "Metallica"),
   ("Travel", "The Beatles");

    INSERT INTO visuals (user_id, quote_id, photo_id)
SELECT id, 'test1', 'testText1'
FROM users
ORDER BY id
LIMIT 1
 
UNION ALL
 
SELECT id, 'test2', 'testText2'
FROM users
ORDER BY id
LIMIT 1;
    
