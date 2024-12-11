import RecipeCard from "../components/RecipeCard";
import useFetchRecipes from "../hooks/useFetchRecipes";

const Home = () => {
  const { recipes, loading } = useFetchRecipes();

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <div className="home">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};
export default Home;