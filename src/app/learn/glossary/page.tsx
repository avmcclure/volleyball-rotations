'use client';

import { useState } from 'react';
import { glossaryTerms } from '@/data/glossary';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'system', 'zone', 'arrangement', 'position', 'concept'];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Glossary</h1>
        <p className="text-lg text-gray-600">
          Quick reference for all volleyball rotation terms and definitions.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-gray-600">
              No terms found matching your search.
            </CardContent>
          </Card>
        ) : (
          filteredTerms.map((term) => (
            <Card key={term.term}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {term.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{term.definition}</p>
                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Related terms:</strong>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {term.relatedTerms.map((relatedTerm) => (
                        <span
                          key={relatedTerm}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {relatedTerm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
