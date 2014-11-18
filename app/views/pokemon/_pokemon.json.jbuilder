json.extract!(pokemon,
  :name, 
  :attack, 
  :defense, 
  :poke_type, 
  :moves, 
  :image_url, 
  :created_at,          
  :updated_at,
  :id
);
if display_toys
  json.toys do
    json.array!(pokemon.toys) do |toy|
      json.partial!("toys/toy", toy: toy)
    end
  end
end