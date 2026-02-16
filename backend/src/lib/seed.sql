-- ============================================================
-- SEED — watchlog
-- ============================================================

TRUNCATE TABLE order_items CASCADE;
TRUNCATE TABLE orders CASCADE;
TRUNCATE TABLE products CASCADE;
TRUNCATE TABLE reviews CASCADE;
TRUNCATE TABLE movies  CASCADE;
TRUNCATE TABLE users   CASCADE;

ALTER SEQUENCE users_id_seq       RESTART WITH 1;
ALTER SEQUENCE movies_id_seq      RESTART WITH 1;
ALTER SEQUENCE reviews_id_seq     RESTART WITH 1;
ALTER SEQUENCE products_id_seq    RESTART WITH 1;
ALTER SEQUENCE orders_id_seq      RESTART WITH 1;
ALTER SEQUENCE order_items_id_seq RESTART WITH 1;

-- ============================================================
-- USERS
-- ============================================================
INSERT INTO users (username, email, password_hash) VALUES
  ('alice',  'alice@example.com',  '$2b$10$Placeholder_AliceHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('bob',    'bob@example.com',    '$2b$10$Placeholder_BobHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('sarah',  'sarah@example.com',  '$2b$10$Placeholder_SarahHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  ('thomas', 'thomas@example.com', '$2b$10$Placeholder_ThomasHashXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

-- ============================================================
-- MOVIES
-- ============================================================
INSERT INTO movies (title, posterUrl, synopsis, casting, director, year) VALUES
(
    'The Godfather',
    'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    'Le fils d''un parrain de la mafia est forcé à prendre le contrôle de l''empire criminel familial.',
    'Marlon Brando, Al Pacino, James Caan, Robert Duvall',
    'Francis Ford Coppola',
    1972
),
(
    'Inception',
    'https://www.themoviedb.org/t/p/w600_and_h900_face/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg',
    'Un voleur spécialisé dans l''extraction de secrets depuis les rêves reçoit une mission : implanter une idée dans l''esprit de quelqu''un.',
    'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe',
    'Christopher Nolan',
    2010
),
(
    'Parasite',
    'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    'Une famille pauvre infiltre astucieusement le foyer d''une famille riche, avec des conséquences inattendues.',
    'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Park So-dam',
    'Bong Joon-ho',
    2019
),
(
    'Pulp Fiction',
    'https://www.themoviedb.org/t/p/w600_and_h900_face/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg',
    'Des histoires entrelacées de boxeurs, de hitmen et de criminels dans Los Angeles, racontées de manière non-linéaire.',
    'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis',
    'Quentin Tarantino',
    1994
),
(
    'Interstellar',
    'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    'Une équipe d''astronautes traverse un trou de ver pour trouver une nouvelle maison pour l''humanité, face à la fin de la Terre.',
    'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine',
    'Christopher Nolan',
    2014
),
(
    'The Shawshank Redemption',
    'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    'Un homme condamné à tort pour un double meurtre raconte son histoire sur 20 ans passés dans une prison d''État.',
    'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
    'Frank Darabont',
    1994
),
(
    'Fight Club',
    'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    'Un homme sans identité crée un club de combat secret qui évolue en mouvement anarchiste.',
    'Brad Pitt, Edward Norton, Helena Bonham Carter',
    'David Fincher',
    1999
),
(
    'The Matrix',
    'https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg',
    'Un hacker découvre que la réalité telle qu''il la connaît est une simulation élaborée par des machines.',
    'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    'Les Wachowskis',
    1999
),
(
    'Whiplash',
    'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    'Un étudiant en jazz ambitieux est confronté à un professeur brutal qui pousse ses élèves jusqu''à leurs limites.',
    'Miles Teller, J.K. Simmons',
    'Damien Chazelle',
    2014
),
(
    'Blade Runner 2049',
    'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    'Un officier de police futuriste découvre un secret qui pourrait chambouler l''ordre de la société.',
    'Ryan Gosling, Harrison Ford, Ana de Armas, Jared Leto',
    'Denis Villeneuve',
    2017
),
(
    'Mad Max: Fury Road',
    'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    'Dans un monde post-apocalyptique, une femme commandante fuit avec des femmes enlevées pour leur liberté.',
    'Tom Hardy, Charlize Theron, Nicholas Hoult',
    'George Miller',
    2015
),
(
    'Gladiator',
    'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    'Un général romain trahi, réduit à l''esclavage, cherche vengeance contre l''empereur qui a assassiné sa famille.',
    'Russell Crowe, Joaquin Phoenix, Connie Nielsen',
    'Ridley Scott',
    2000
),
(
    '1917',
    'https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    'Deux soldats britanniques traversent le no man''s land pendant la Première Guerre mondiale pour transmettre un message crucial.',
    'George MacKay, Dean-Charles Chapman, Benedict Cumberbatch',
    'Sam Mendes',
    2019
),
(
    'Spirited Away',
    'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    'Une petite fille embarquée dans un monde spirituel mystérieux doit trouver un moyen de libérer ses parents.',
    'Rumi Hiiragi, Miyu Irino, Mari Natsuki (VF)',
    'Hayao Miyazaki',
    2001
),
(
    'The Dark Knight',
    'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    'Batman fait face à son plus grand adversaire, le Joker, qui sème le chaos dans Gotham City.',
    'Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman',
    'Christopher Nolan',
    2008
);


-- ============================================================
-- REVIEWS
-- ============================================================
INSERT INTO reviews (rating, comment, created_at, movie_id, user_id) VALUES

  (10, 'Un chef-d''œuvre absolu, impossible à oublier.', '2024-11-12 20:30:00', 1, 1),  -- The Godfather
  (9,  'Nolan à son meilleur. Chaque visionnage révèle quelque chose de nouveau.', '2024-11-15 22:10:00', 2, 1),  -- Inception
  (8,  'Brillant mais un peu long. Le deuxième acte est énorme.', '2024-12-01 19:45:00', 3, 1),  -- Parasite
  (7,  NULL, '2024-12-10 21:00:00', 4, 1),  -- Pulp Fiction (pas de commentaire)
  (9,  'La bande originale alone vaut le coup. Visuellement dingue.', '2025-01-02 23:15:00', 5, 1),  -- Interstellar
  (6,  'Bien fait mais pas aussi bon qu''on en parle.', '2025-01-18 18:30:00', 8, 1),  -- The Matrix

  (7,  'Classic. Mais j''ai du mal à accrocher au début.', '2024-10-22 21:00:00', 1, 2),  -- The Godfather
  (10, 'Le meilleur film que j''ai jamais vu. Point.', '2024-10-25 20:00:00', 6, 2),  -- Shawshank
  (8,  'Tarantino fait ce qu''il fait le mieux : du dialogue qui claque.', '2024-11-03 22:30:00', 4, 2),  -- Pulp Fiction
  (5,  'Pas mal mais j''ai attendu plus de Villeneuve.', '2024-12-20 19:00:00', 10, 2),  -- Blade Runner 2049
  (9,  'Intense du début à la fin. J.K. Simmons est incroyable.', '2025-01-10 20:45:00', 9, 2),  -- Whiplash

  (8,  'Parasite est un masterclass de mise en scène.', '2024-09-14 21:30:00', 3, 3),  -- Parasite
  (10, 'Fury Road est juste de la pure adrénaline. Parfait.', '2024-09-20 22:00:00', 11, 3),  -- Mad Max
  (7,  'Belle histoire, Russell Crowe excellente dedans.', '2024-10-05 19:15:00', 12, 3),  -- Gladiator
  (9,  'Le sens créatif de Miyazaki est unique.', '2024-11-28 20:00:00', 14, 3),  -- Spirited Away
  (8,  NULL, '2024-12-15 23:00:00', 2, 3),  -- Inception
  (6,  'Impressionnant techniquement mais l''histoire reste simple.', '2025-01-22 18:45:00', 13, 3);  -- 1917

INSERT INTO reviews (rating, comment, created_at, movie_id, user_id) VALUES
  (9,  'Ledger pour la dernière fois... absolument magnifique.', '2024-08-10 21:00:00', 15, 4),  -- The Dark Knight
  (10, 'Fight Club m''a changer la façon de voir les choses.', '2024-08-18 22:30:00', 7, 4),  -- Fight Club
  (8,  'The Matrix a inventé un genre. Respect.', '2024-09-02 20:15:00', 8, 4),  -- The Matrix
  (7,  'Bon film de sci-fi. Pas le meilleur de Nolan.', '2024-10-11 19:45:00', 5, 4),  -- Interstellar
  (6,  NULL, '2024-11-05 21:30:00', 6, 4);  -- Shawshank

-- ============================================================
-- SEED SHOP 
-- ============================================================

-- ============================================================
-- PRODUCTS
-- ============================================================
INSERT INTO products (name, description, price, image_url, stock) VALUES
  (
    'T-shirt Letterbox Classic',
    'T-shirt 100% coton avec le logo Watchlog brodé. Confortable et stylé pour les cinéphiles.',
    24.99,
    'https://placehold.co/400x500/1a1d27/e8735a?text=Letterbox+Tee',
    50
  ),
  (
    'Mug "Director''s Cut"',
    'Mug en céramique 350ml avec citation culte de films. Parfait pour ton café du matin.',
    12.99,
    'https://placehold.co/400x400/1a1d27/f0c040?text=Letterbox+Mug',
    100
  ),
  (
    'Poster Rétro "Cinéma"',
    'Affiche vintage 50x70cm imprimée sur papier premium. Design minimaliste inspiré des films classiques.',
    19.99,
    'https://placehold.co/500x700/1a1d27/60a5fa?text=Retro+Poster',
    30
  ),
  (
    'Casquette Snapback',
    'Casquette ajustable avec broderie Watchlog. Style streetwear pour les fans.',
    18.99,
    'https://placehold.co/400x400/1a1d27/4ade80?text=Letterbox+Cap',
    75
  ),
  (
    'Stickers Pack (x10)',
    'Pack de 10 stickers vinyle waterproof avec des icônes de films cultes.',
    7.99,
    'https://placehold.co/400x400/1a1d27/a78bfa?text=Sticker+Pack',
    200
  ),
  (
    'Tote Bag Canvas',
    'Sac en toile robuste 100% coton. Idéal pour transporter tes DVDs vintage.',
    14.99,
    'https://placehold.co/400x500/1a1d27/e8735a?text=Tote+Bag',
    60
  ),
  (
    'Hoodie "Cinephile"',
    'Sweat à capuche premium avec design minimaliste. Chaud et confortable.',
    44.99,
    'https://placehold.co/400x500/1a1d27/f0c040?text=Letterbox+Hoodie',
    40
  ),
  (
    'Carnet Moleskin',
    'Carnet 120 pages lignées pour noter tes critiques de films. Couverture rigide.',
    16.99,
    'https://placehold.co/400x500/1a1d27/60a5fa?text=Film+Journal',
    80
  );

-- ============================================================
-- ORDERS (Commandes de test)
-- ============================================================

INSERT INTO orders (user_id, total_amount, status, shipping_address, created_at) VALUES
  (1, 37.98, 'delivered', '12 Rue de la Cinémathèque, 75013 Paris, France', '2024-12-15 14:30:00');

INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES
  (1, 1, 1, 24.99), 
  (1, 2, 1, 12.99); 

INSERT INTO orders (user_id, total_amount, status, shipping_address, created_at) VALUES
  (2, 47.97, 'shipped', '34 Avenue du Film, 69002 Lyon, France', '2025-01-05 10:15:00');

INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES
  (2, 3, 2, 19.99), 
  (2, 5, 1, 7.99);  

INSERT INTO orders (user_id, total_amount, status, shipping_address, created_at) VALUES
  (3, 63.98, 'paid', '89 Boulevard des Arts, 33000 Bordeaux, France', '2025-01-20 16:45:00');

INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES
  (3, 7, 1, 44.99), 
  (3, 4, 1, 18.99); 

INSERT INTO orders (user_id, total_amount, status, shipping_address, created_at) VALUES
  (4, 55.94, 'pending', '5 Place du Cinéma, 44000 Nantes, France', '2025-01-28 11:00:00');

INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES
  (4, 8, 1, 16.99), 
  (4, 6, 1, 14.99),  
  (4, 5, 3, 7.99);  

INSERT INTO orders (user_id, total_amount, status, shipping_address, created_at) VALUES
  (1, 26.98, 'delivered', '12 Rue de la Cinémathèque, 75013 Paris, France', '2025-02-01 09:20:00');

INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES
  (5, 2, 2, 12.99); 
