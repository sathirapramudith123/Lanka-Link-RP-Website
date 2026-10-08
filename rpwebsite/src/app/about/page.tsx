import Avatar from "@/components/Avatar";
import PageHero from "@/components/PageHero";
import { team } from "@/data/content";

type Person = {
  name: string;
  role: string;
  componentRole?: string;
  photo: string;
  university: string;
  faculty: string;
  department: string;
  email: string;
  linkType: "scholar" | "linkedin";
  link: string;
};

function LinkIcon({ type }: { type: "scholar" | "linkedin" }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9zM5 13.18v4.09c0 1.7 3.13 3.73 7 3.73s7-2.03 7-3.73v-4.09L12 17z" />
    </svg>
  );
}

type Member = Person & {
  studentId: string;
  description: string;
  tags: string[];
};

function MemberCard({ member }: { member: Member }) {
  const {
    name,
    role,
    studentId,
    componentRole,
    description,
    tags,
    photo,
    email,
  } = member;
  const isLeader = role === "Group Leader";

  return (
    <div className="card">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          <Avatar src={photo} name={name} sizes="56px" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-slate-900">
              {name}
            </h3>
            {isLeader ? (
              <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                👑 Team Leader
              </span>
            ) : null}
          </div>
          <span className="mt-1 inline-block rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-500">
            {studentId}
          </span>
        </div>
      </div>

      {componentRole ? (
        <p className="mt-4 font-semibold text-brand-700">{componentRole}</p>
      ) : null}
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`mailto:${email}`}
        className="mt-5 block font-semibold text-slate-700 hover:text-brand-700"
      >
        {email}
      </a>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  const {
    name,
    role,
    componentRole,
    photo,
    university,
    faculty,
    department,
    email,
    linkType,
    link,
  } = person;

  return (
    <div className="card">
      <div className="flex items-center gap-5">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Avatar src={photo} name={name} sizes="112px" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900">{name}</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-700">
            {role}
          </p>
          {componentRole ? (
            <p className="mt-0.5 text-xs text-slate-400">{componentRole}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-slate-800">{university}</p>
        <dl className="mt-2 space-y-1.5">
          <div className="flex gap-2 text-sm">
            <span className="text-slate-400">•</span>
            <dt className="w-24 shrink-0 font-medium text-slate-400">Faculty</dt>
            <dd className="text-slate-700">{faculty}</dd>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-slate-400">•</span>
            <dt className="w-24 shrink-0 font-medium text-slate-400">Department</dt>
            <dd className="text-slate-700">{department}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-brand-700"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
          </svg>
          Email
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-medium text-brand-700 hover:underline"
        >
          <LinkIcon type={linkType} />
          {linkType === "linkedin" ? "LinkedIn" : "Google Scholar"}
        </a>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Research Team"
        subtitle="The students and supervisors behind this research project."
      />
      <div className="container-page py-14">

      <div className="mt-12">
        <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
          Supervisors
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {team.supervisors.map((s) => (
            <PersonCard key={s.name} person={s} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
          Group Members
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {team.members.map((m) => (
            <MemberCard key={m.name} member={m as Member} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}