import Image from "next/image";

 export default function EmptySearch() {
    return (
      <section className="empty-search" aria-labelledby="no-results-title">
        <Image src="/ion_people.png" alt="" width={109} height={109} priority />
        <h2 id="no-results-title">No results found</h2>
        <button className="edit-search">Edit Search</button>
      </section>
    );
  }