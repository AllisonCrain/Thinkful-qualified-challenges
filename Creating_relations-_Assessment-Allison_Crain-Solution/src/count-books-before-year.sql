SELECT count(*)
FROM books b
JOIN authors a
ON b.author_id = a.author_id
WHERE b.publication_year < '2000';