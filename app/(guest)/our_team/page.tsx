// const members = [
//   {
//     name: "Maria Santos",
//     role: "Executive Director",
//   },
//   {
//     name: "John Ramirez",
//     role: "Program Coordinator",
//   },
//   {
//     name: "Ana Villanueva",
//     role: "Volunteer Lead",
//   },
//   {
//     name: "Paolo Cruz",
//     role: "Family Support Specialist",
//   },
// ]

// export default function TeamPage() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
//       <div className="max-w-3xl">
//         <p className="text-sm font-medium text-emerald-700">Our Team</p>
//         <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
//           People behind the mission
//         </h1>
//         <p className="mt-4 text-muted-foreground">
//           Our team is made up of compassionate professionals and advocates committed to helping
//           differently-abled children and their families thrive.
//         </p>
//       </div>

//       <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {members.map((member) => (
//           <article
//             key={member.name}
//             className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm text-center"
//           >
//             <div className="mx-auto h-24 w-24 rounded-full bg-linear-to-br from-emerald-100 to-amber-100" />
//             <h2 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h2>
//             <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }
export default function TeamPage() {

  const boardMembers = [
    {
      id: "board-1",
      name: "Neil Aldrin D. Mallari, PhD",
      position: "Chairperson",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Neil Aldrin D. Mallari",
    },
    {
      id: "board-2",
      name: "Ermelina B. Mondejar, Ed.D.",
      position: "Treasurer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      alt: "Ermelina B. Mondejar",
    },
    {
      id: "board-3",
      name: "Joselito K. Belamide",
      position: "Corporate Secretary",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      alt: "Joselito K. Belamide",
    },
  ];
  const staffMembers = [
    {
      id: "staff-1",
      name: "Jinky D. Alzate, RPm",
      position: "Executive Director",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      alt: "Jinky D. Alzate",
    },
    {
      id: "staff-2",
      name: "Ecil Alira V. Nayera",
      position: "Administrative Officer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      alt: "Ecil Alira V. Nayera",
    },
    {
      id: "staff-3",
      name: "Meri Janvien C. Sorrel, LPT",
      position: "Inakay Program Coordinator",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
      alt: "Meri Janvien C. Sorrel",
    },
    {
      id: "staff-4",
      name: "Jade R. Galang",
      position: "Inakay Facilitators",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Jade R. Galang",
    },
    {
      id: "staff-5",
      name: "Truzjka Jeyel P. Baltazar",
      position: "Inakay Facilitators",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      alt: "Truzjka Jeyel P. Baltazar",
    },
    {
      id: "staff-6",
      name: "Krizelle Anne R. Paglinawan",
      position: "Inakay Teacher Aide",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      alt: "Krizelle Anne R. Paglinawan",
    },
  ];
  const members = [
    {
      id: "member-1",
      name: "Jinky D. Alzate, RPm",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      alt: "Jinky D. Alzate",
    },
    {
      id: "member-2",
      name: "Rosalina H. Balagot",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      alt: "Rosalina H. Balagot",
    },
    {
      id: "member-3",
      name: "Aidel Paul Belamide",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
      alt: "Aidel Paul Belamide",
    },
    {
      id: "member-4",
      name: "Reyel Dominguez",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Reyel Dominguez",
    },
    {
      id: "member-5",
      name: "Noli D. Gusi",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      alt: "Noli D. Gusi",
    },
    {
      id: "member-6",
      name: "Catherine A. Magno, LPT",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      alt: "Catherine A. Magno",
    },
    {
      id: "member-7",
      name: "Luis Ortiz, TC",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      alt: "Luis Ortiz",
    },
    {
      id: "member-8",
      name: "Gabriel Manubat Jr.",
      position: "Member",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      alt: "Gabriel Manubat Jr.",
    },
  ];
  const membersRowOne = members.slice(0, 3);
  const membersRowTwo = members.slice(3);
  const MemberCard = ({ member }: { member: typeof members[0] }) => (
    <div className="flex flex-col items-center">
      <div className="mb-4 size-32 overflow-hidden rotate-45 bg-muted">
        <img
          src={member.avatar}
          alt={member.alt}
          className="size-full object-cover -rotate-45 scale-150"
        />
      </div>
      <h3 className="text-center text-base font-semibold">{member.name}</h3>
      <p className="text-center text-sm text-muted-foreground">{member.position}</p>
    </div>
  );
  return (
    <section>
      <div className="py-35 mx-auto max-w-6xl px-6">
        <div className="mb-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Our Board of Trustees
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {boardMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        <div className="mb-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Our Staff
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {staffMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Members
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {membersRowOne.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {membersRowTwo.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}