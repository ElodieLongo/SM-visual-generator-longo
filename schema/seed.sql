USE mysql_project_db;

INSERT INTO users (username, password)
VALUES 
    ("banana", "$2b$10$/1UfZvXYrToAGa5mO1IbfesmFQJ42WIlI60swCyafhzrB/2KcD1RK"),
    ("apple", "#2b$10$/1UfZvXYpToAGa5mO1IbfesmFQJ42WIlI60swCyafhzrB/2KcD1RK");


INSERT INTO quotes (tag, text, author)
  VALUES
   ("time", "Time is more valuable than money. You can get more money, but you cannot get more time.", "Jim Rohn"),
   ("time", "Time heals what reason cannot.", "Seneca"),
   ("time", "Until we can manage time, we can manage nothing else.", "Peter Drucker"),
   ("time", "To some degree, you control your life by controlling your time.", "Conrad Hilton"),
   ("time", "The more you are focused on time - past and future - the more you miss the Now, the most precious thing there is.", "Eckhart Tolle"),

   ("love", "The giving of love is an education in itself.", "Eleanor Roosevelt"),
   ("love", "The way to love anything is to realize that it may be lost.", "Gilbert Chesterton"),
   ("love", "Not all of us can do great things. But we can do small things with great love.", "Mother Teresa"),
   ("love", "I know of only one duty, and that is to love.", "George Bernard Shaw"),
   ("love", "Duty makes us do things well, but love makes us do them beautifully.", "Zig Ziglar"),

   ("happiness", "No man is happy unless he believes he is.", "Publilius Syrus"),
   ("happiness", "Happiness is only real, when shared.", "Christopher McCandless"),
   ("happiness", "Don't seek, don't avoid, don't expect. Take what comes and be happy.", "Maxime Lagace"),
   ("happiness", "For every minute you are angry you lose sixty seconds of happiness.", "Ralph Waldo Emerson"),
   ("happiness", "The primary cause of unhappiness is never the situation but your thoughts about it.", "Eckhart Tolle"),

   ("life", "Acknowledging the good that you already have in your life is the foundation for all abundance.", "Eckhart Tolle"),
   ("life", "The significance of life is living.", "Jiddu Krishnamurti"),
   ("life", "True life is lived when tiny changes occur.", "Leo Tolstoy"),
   ("life", "All life is an experiment. The more experiments you make, the better.", "Ralph Waldo Emerson"),
   ("life", "You cannot find peace by avoiding life.", "Virginia Woolf");
   



   

INSERT INTO visuals (user_id, quote_id, photo_id)
    VALUES
    (1, 1, "photo1"),
    (2, 2, "photo2");
