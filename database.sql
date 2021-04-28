create database notesApp ;
create table notes(
    note_id serial primary key,
    title VARCHAR(30),
    description TEXT,
    created date,
    last_updated date,
    created_by VARCHAR(50)
);