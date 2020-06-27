package com.chi.dreamcatcher.repository;

import com.chi.dreamcatcher.entity.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// The @RepositoryRestResource annotation is optional and is used to customize the REST endpoint like naming etc.
// If we decided to omit it and use @Repository instead, Spring would automatically create an endpoint at according
// to the Entity's name
@RepositoryRestResource
public interface QuestionRepository extends CrudRepository<Question, Long> {

}
