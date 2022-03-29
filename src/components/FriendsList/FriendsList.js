import { useMemo, useState } from "react";
import Card from "../Card/Card";
import InputForm from "../InputForm/InputForm";
import Pagination from "../Pagination/Paginantion";
import "./friendlist.css";

function FriendsList({ friends, setFriends }) {
  const PageSize = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalItemsToShow, setTotalItemsToShow] = useState(0);

  const deleteUSer = (id) => {
    const newList = friends.filter((friend) => {
      return friend.id !== id;
    });
    setFriends(newList);
  };

  const toggleFav = (id) => {
    const newList = friends.map((friend) => {
      return friend.id === id
        ? { ...friend, fav: friend.fav ^ 1 }
        : { ...friend };
    });
    setFriends(newList);
  };

  const currentTableData = useMemo(() => {
    let computedFriends = friends;
    if (searchQuery) {
      computedFriends = computedFriends.filter((friend) => {
        return friend.name
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase());
      });
    }
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setTotalItemsToShow(computedFriends.length);
    return computedFriends.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, friends, searchQuery]);

  const sortByFav = () => {
    let t = [...friends];
    t = t.sort((a, b) => b.fav - a.fav);
    setCurrentPage(1);
    setFriends(t);
  };

  const updateSearch = (value) => {
    setSearchQuery(value);
  };

  const addFriend = (name) => {
    let newFriend = {
      name: name,
      id: Date.now(),
      fav: 0,
    };
    setFriends([newFriend, ...friends]);
  };

  return (
    <div>
      <div className="head">FRIENDS LIST</div>
      <div className="input-container">
        <InputForm addFriend={addFriend} />
        <input
          className="search-box"
          type="text"
          onChange={(e) => {
            setCurrentPage(1);
            updateSearch(e.target.value);
          }}
          value={searchQuery}
          placeholder={"Search Friend"}
        ></input>
      </div>
      <div className="func-text" onClick={() => sortByFav()}>
        Sort by Favourite
      </div>
      <div className="list-container">
        {currentTableData.length > 0 ? (
          currentTableData.map((friend) => {
            return (
              <Card
                friend={friend}
                key={friend.id}
                deleteUSer={deleteUSer}
                toggleFav={toggleFav}
              />
            );
          })
        ) : (
          <div className="empty-list-container">No Friends Found</div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={totalItemsToShow}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default FriendsList;
