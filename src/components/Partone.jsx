import { userData } from "./userData";

const PartOne = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {userData && (
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-2">Contact</h1>
            <ul>
              <li className="mb-1">Phone: {userData.contact.phone}</li>
              <li className="mb-1">Email: {userData.contact.email}</li>
              <li>Address: {userData.contact.address}</li>
            </ul>
          </div>
          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-2">Education</h1>
            <ul>
              {userData.education.map((edu, eduIndex) => (
                <li key={eduIndex} className="mb-1">
                  {edu.degree} - {edu.institution}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-2">Expertise</h1>
            <ul>
              {Object.entries(userData.expertise).map(
                ([category, skills], exIndex) => (
                  <li key={exIndex} className="mb-1">
                    <strong>{category}</strong>: {skills.join(", ")}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-2">Languages</h1>
            <ul>
              {userData.languages.map((language, langIndex) => (
                <li key={langIndex} className="mb-1">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartOne;
