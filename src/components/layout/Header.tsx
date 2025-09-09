import { useState, useMemo } from "react";
import "../../css/Header.css";

interface Course {
  name: string;
  code: string;
}

interface HeaderProps {
  page: string;
  goToHome: () => void;
  setPage: (page: string) => void;
  courses: Course[];
}

function Header({ page, goToHome, setPage, courses }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filteredCourses = useMemo(() => {
    if (!searchQuery) return [];
    return courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, courses]);

  const handleSearchSelect = (courseCode: string) => {
    setPage(courseCode);
    setSearchQuery("");
    setIsSearchActive(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">IT Archives</h1>
        <div className="header-nav-container">
          <nav className="header-nav">
            <div className="header-search-container">
              <input
                type="text"
                className="header-search-input"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchActive(true)}
                onBlur={() => setTimeout(() => setIsSearchActive(false), 200)}
                aria-label="Search for courses by name"
              />
              {isSearchActive && searchQuery && filteredCourses.length > 0 && (
                <ul className="search-dropdown">
                  {filteredCourses.map((course) => (
                    <li
                      key={course.code}
                      className="search-dropdown-item"
                      onMouseDown={() => handleSearchSelect(course.code)}
                      role="option"
                      aria-selected={page === course.code}
                    >
                      {course.name}
                    </li>
                  ))}
                </ul>
              )}
              {isSearchActive &&
                searchQuery &&
                filteredCourses.length === 0 && (
                  <div className="search-no-results">No courses found</div>
                )}
            </div>
            <button
              className={`nav-button ${
                page === "Home" ? "nav-button-active" : ""
              }`}
              onClick={goToHome}
              aria-current={page === "Home" ? "page" : undefined}
            >
              Home
            </button>
            <button className="nav-button" aria-label="About IT Archives">
              About
            </button>
            <button className="nav-button" aria-label="Contact Us">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
