module.exports = (schoolID, option_type) =>
  `https://api.ppdb.jabarprov.go.id/portal/registrant?pagination=false&orderby=created_at&order=asc&search=&columns[0][key]=name&columns[0][searchable]=true&columns[1][key]=registration_number&columns[1][searchable]=true&filters[0][key]=first_choice_school&filters[0][value]=${schoolID}&filters[1][key]=option_type&filters[1][value]=${option_type}`;
