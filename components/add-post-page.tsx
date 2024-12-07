'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import { submitProject } from '@/app/actions'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function formatDate(date: Date) {
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}


export default function AddProjectPage() {
  const router = useRouter()
  const [technology, setTechnology] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleAddTechnology = () => {
    if (technology.trim() !== '') {
      setTechnologies([...technologies, technology.trim()])
      setTechnology('')
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = async (formData: FormData) => {
    const imgFile = formData.get("img");
    formData.set('startDate', formatDate(startDate!));
    formData.set('endDate', formatDate(endDate!));

    if ((imgFile as File).size === 0) {
      return;
    }

    try {
      const response = await submitProject(formData, technologies);

      if (response.success) {
        router.push('/projects')
      }
    } catch (error: any) {
      console.log('Error Adding Project: ', error);
    }
  }

  return (
    <div className="container py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                await handleSubmit(formData);
            }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input
                id="projectTitle"
                name="projectTitle"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description</Label>
              <Input
                id="projectDescription"
                name='projectDescription'
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubLink">Github Link</Label>
              <Input
                id="githubLink"
                name='githubLink'
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="livePreview">Live Preview</Label>
              <Input
                id="livePreview"
                name='livePreview'
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectGoal">Project Goal</Label>
              <Textarea
                id="projectGoal"
                name='projectGoal'
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="technicalRequirement">Technical Requirement</Label>
              <Textarea
                id="technicalRequirement"
                name='technicalRequirement'
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectScope">Project Scope</Label>
              <Textarea
                id="projectScope"
                name='projectScope'
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Date Started</Label> <br />
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="space-y-2">
              <Label>Date Ended</Label> <br />
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
            <div className="space-y-2">
                <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <label
                    htmlFor="img"
                >
                    <span className="mr-2">Upload Image</span>
                    <button
                    type="button"
                    onClick={() => {
                        const input = document.getElementById("img");
                        if (input) {
                        input.click();
                        }
                    }}
                    className="text-xs ml-auto px-4 py-1 bg-black text-white rounded-full"
                    >
                    Upload
                    </button>
                </label>

                {fileName && (
                    <span className="text-gray-200 text-sm mt-1 block max-w-full overflow-hidden text-ellipsis">
                    Selected file:
                    <span className="text-black text-sm mt-1 block truncate max-w-full">
                        {fileName}
                    </span>
                    </span>
                )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies</Label>
              <div className="flex space-x-2">
                <Input
                  id="technologies"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  placeholder="Add a technology"
                />
                <Button type="button" onClick={handleAddTechnology} size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tech}
                    <button type="button" onClick={() => handleRemoveTechnology(tech)} className="text-xs">
                      <MinusIcon className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full">Add Project</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
