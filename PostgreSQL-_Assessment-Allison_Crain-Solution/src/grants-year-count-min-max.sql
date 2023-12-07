SELECT DISTINCT count(*), min(amount), max(amount), fiscal_year
FROM grants
GROUP BY fiscal_year
ORDER BY fiscal_year DESC;


