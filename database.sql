create database notesApp ;
create table notes(
    note_id serial primary key,
    title VARCHAR(30),
    description TEXT,
    created date,
    last_updated date,
    created_by VARCHAR(50),
    notetype VARCHAR(6) NOT NULL
);

ALTER TABLE notes 
ADD COLUMN notetype VARCHAR(6) NOT NULL ;

-- add notes
INSERT INTO notes (title, description, created, last_updated, 
created_by, notetype) VALUES ('timothy',
 'i am the most interesting person in the whole world',
 now(),now(), 'tim', 'pinned' );