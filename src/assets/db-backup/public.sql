PGDMP     '    	                x            shame    10.12    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16384    shame    DATABASE     �   CREATE DATABASE shame WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Hebrew_Israel.1255' LC_CTYPE = 'Hebrew_Israel.1255';
    DROP DATABASE shame;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16396 	   realities    TABLE     �   CREATE TABLE public.realities (
    "warriorReality" integer NOT NULL,
    "attackDemands" integer,
    "operationalPlans" integer,
    ng integer,
    name character varying
);
    DROP TABLE public.realities;
       public            postgres    false    3                      0    16396 	   realities 
   TABLE DATA           d   COPY public.realities ("warriorReality", "attackDemands", "operationalPlans", ng, name) FROM stdin;
    public          postgres    false    199   �          G   x�3�4 ���O������3���2��뫮��>	(4,l�	��g_��p}2P�
���O������ Y�#�     